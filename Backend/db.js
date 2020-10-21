const Sequelize = require('sequelize')

const db = newSequelize ('Database1', 'shopper', 'shopass', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    },
    get pool() {
        return this._pool
    },
    set pool(value) {
        this._pool = value
    },
    get pool() {
        return this._pool
    },
    set pool(value) {
        this._pool = value
    },
})

const Customer = db.define('customer', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cust_name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    cust_email:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    cust_password:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    cust_address:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    cust_contact:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }
})
const employee = db.define('employee', {
    emp_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    emp_name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    emp_email:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    emp_address:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    emp_designation:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    emp_contact:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    emp_salary:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    emp_doj:{
        type: Sequelize.DATE,
    }
})
const Category = db.define('category', {
    cat_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cat_name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    cat_image:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
    cat_description:{
        type: Sequelize.TEXT,
        allowNull: false,
    }
})
const nav = db.define('nav', {
    nav_description:{
        type: Sequelize.TEXT,
        autoIncrement: true,
        primaryKey: true
    },
    nav_link:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    nav_status:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    nav_title:{
        type: Sequelize.STRING,
        allowNull: false,
    }
})
const product = db.define('product', {
    prd_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    prd_name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    prd_cat_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    prd_status:{
        type: Sequelize.STRING,
        allowNull: false,
    }
});
product.belongsTo(Category, {foreignKey: 'cat_id'});

const prd_details = db.define('prd_details', {
    prd_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    prd_name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    prd_price:{
        type: Sequelize.FLOAT,
        autoIncrement: true,
        primaryKey: true,
    },
    prd_image:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    prd_description:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
    prd_quantity:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    prd_date:{
        type: Sequelize.DATE,
        allowNull: false,
    }
})
prd_details.belongsTo(product, {foreignKey: 'prd_id'});

const purchases = db.define('purchases', {
    purchase_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    purchase_prd_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    purchase_quantity:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    purchase_cost_price:{
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    purchase_sale_price:{
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    purchase_date:{
        type: Sequelize.DATE,
        allowNull: false,
    },
    purchase_advance:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    purchase_total:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    purchase_balance:{
        tupe: Sequelize.FLOAT,
        allowNull: false,
    }
})
purchases.belongsTo(product, {foreignKey: 'prd_id'});

const purchases_return = db.define('purchases', {
    purchase_retun_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    purchase_return_purchase_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    purchase_return_quantity:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    purchase_return_date:{
        type: Sequelize.DATE,
        allowNull: false,
    },
    purchase_return_description:{
        type: Sequelize.TEXT,
        allowNull: false,
    }
 })
 purchase_return.belongsTo(purchases, {foreignKey: 'purchase_id'});

 const orders = db.define('orders', {
    order_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    order_cust_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    ordre_date:{
        type: Sequelize.DATE,
        allowNull: false,
    },
    order_status:{
        type: Sequelize.DATE,
        allowNull: false,
    }
 })
 orders.belongsTo(Customer, {foreignKey: 'cust_id'});

 const ord_details = db.define('ord_details', {
    ord_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    ord_quantity:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    ord_price:{
        type: Sequelize.FLOAT,
        allowNull: false,
    }
 })
 ord_details.belongsTo(orders, {foreignKey: 'ord_id'});
 ord_details.belongsTo(product, {foreignKey: 'ord_prd_id'});

 const sales = db.define('sales', {
    sale_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    sale_ord_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    sale_mod_payement:{
        type: Sequelize.STRING,
        allowNull: false,
    }
 })
 sales.belongsTo(orders, {foreignKey: 'ord_id'});

 const sales_return = db.define('sales_return', {
    sale_return_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    sale_return_sale_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    sale_prd_id:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    sale_return_quantity:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    sale_return_date:{
        type: Sequelize.DATE,
        allowNull: false,
    },
    sale_return_cause_return:{
        type: Sequelize.TEXT,
        allowNull: false,
    }
 })
 sale_return.belongsTo(sales, {foreignKey: 'sale_id'});
 sale_return.belongsTo(product, {foreignKey: 'prd_id'});

 db.sync()
   .then(() => console.log("Database has been synced"))
   .catch((err) => console.error("Error in creating database"))
 
   exports = module.exports = {
     Customer, employee, Category, nav, product, prd_details, purchases, purchases_return, orders, ord_details, sales, sales_return
 }