This MySQL Database created is called `bamazon`.

The Table inside of that database called `products`.

The products table have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

Initially, this database was populated with around 10 different products. The google link image shows this functionality
https://drive.google.com/open?id=1ePEUYr1sHNVHz3cmtEH8MrQqfdcLignA 

This application first displays all of the items available for sale, with the ids, names, and prices of products for sale.

The app prompts users with two messages:

   * The first should asking the udrt for the ID of the product they would like to buy.
   * The second message asks how many units of the product they would like to buy.


Once the customer has placed the order, the application checks if your store has enough of the product to meet the customer's request.

   * If not, the app logs a phrase like `Insufficient quantity!`, and then prevent the order from going through, as illustrated below:
   https://drive.google.com/open?id=1zsxgO4lt0SDRvvaPp-kAaXpWcq9VSnfy

However, when Bamazon does have enough of the product, the customer's order is fulfilled.
   * The SQL database  is updated to reflect the remaining quantity.
   * Once the customer the total cost of their purchase.
The illustration is below:
https://drive.google.com/open?id=1WAvBiRoeSPi-VQG19EDbMeR5SCFHOP_W


