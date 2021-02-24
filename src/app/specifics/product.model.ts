export class Product {
  public ProductID;
  public ProductName;
  public Discontinued;
  public UnitsInStock;
  public UnitPrice;



constructor(
  ProductID: any = null,
  ProductName: string = '',
  Discontinued: boolean = false,
  UnitsInStock: number = 0,
  UnitPrice: number = 0) {
  this.ProductID = ProductID;
  this.ProductName = ProductName;
  this.Discontinued = Discontinued;
  this.UnitsInStock = UnitsInStock;
  this.UnitPrice = UnitPrice;
  }

}
