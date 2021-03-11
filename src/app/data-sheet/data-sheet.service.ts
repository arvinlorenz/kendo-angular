import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { tap, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataSheetService {
  $versions = new BehaviorSubject<any[]>([]);
  constructor(private apollo: Apollo) {
  }


  getVersions(): any {
    return this.$versions?.asObservable();
  }
  getVersionsG(): any {
    // return this.$versions?.asObservable();
    return this.apollo.watchQuery({
      query: gql`{
        getVersions {
          _id
          text
          data
          items {
            text
            data
          }
        }
      }`
    })
    .valueChanges
    .pipe(
      map((res: any) => {
        return res.data.getVersions;
      }),
      tap((a: any) => {
        this.$versions.next(a);
      })
    );
    // tslint:disable-next-line: deprecation

  }

  addVersion(date: string, time: string, data: string): any {
    let addedVersion: any;
    return this.apollo.mutate({
      mutation: gql`
      mutation AddVersion($date: String!, $time: String!, $data: String!) {
          addVersion(versionInput: { date: $date, time: $time, data: $data }) {
            _id
            text
            data
            items {
              text
              data
            }
          }
        }`,
      variables: {
        date, time, data
      }
    }).pipe(
      map((res: any) => {
        return res.data.addVersion;
      }),
      switchMap((a: any) => {
        addedVersion = a;
        return this.getVersionsG();
      }),
      tap((versions: any) => {
        const v = versions.filter((ver: any) => ver.text !== date);
        this.$versions.next([addedVersion, ...v]);
      })
    );
  }
}
