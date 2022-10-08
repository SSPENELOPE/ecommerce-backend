// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'product_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'cascade',
})

// Products belongToMany Tags (through ProductTag)
Product.hasMany(ProductTag, {
  foreignKey: 'product_id',
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsTo(ProductTag, {
  foreignKey: 'tag_id',
});

// Export the models
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
