const sequelize = require('sequelize');

const db = new sequelize('mca','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

db.authenticate()
    .then(()=>{
        console.log('Connection has been established successfully.');
    })
    .catch(err=>{
        console.error('Unable to connect to the database:', err);
    });

// create table

const Student = db.define('student',{
    id : {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name : {
        type: sequelize.STRING,
        allowNull: false
    },
    city : {
        type: sequelize.STRING,
        allowNull: false
    },
    email : {
        type: sequelize.STRING,
        allowNull: false,
        unique: true,
    }   
});
Student.sync()
    .then(()=>{
        console.log('Table created successfully');
    })
    .catch(err=>{
        console.error('Unable to create table:', err);
    });

// insert data

Student.create({
    name : 'Shashank',
    city : 'Rajkot',
    email : 'shashank@gmail.com'
})
.then(()=>{
    console.log('Data inserted successfully');
})
.catch(err=>{
    console.error('Unable to insert data:', err);
});

// fetch all data

Student.findAll()
    .then(Student => {
        const plainStudent  = Student.map(student => student.toJSON());
        console.table(plainStudent);
    })
    .catch(err=>{
        console.error('Unable to fetch data:', err);
    });

// fetch Single Record

Student.findByPk(19)
    .then(Student=>{
        console.log(Student.toJSON());
    })
    .catch(err=>{
        console.error('Unable to fetch data:', err);
    });

// update data

Student.update({
    name : 'ABC',
    city : 'Surat',
    email : 'abc@gmail.com'
},
{
    where : {id : 19}
})
.then(()=>{
    console.log('Data updated successfully');
})
.catch(err=>{
    console.error('Unable to update data:', err);
});

// delete data

Student.destroy({
    where : {id : 19}
})
.then(()=>{
    console.log('Data deleted successfully');
})
.catch(err=>{
    console.error('Unable to delete data:', err);
});