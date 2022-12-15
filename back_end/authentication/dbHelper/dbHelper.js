const mssql = require('mssql')
const {config} = require('../sqlConfig/sqlConfig')


class dbHelper {

    constructor(){
        this.connectionPool = this.createConnection()
    }

    createConnection =async()=>{

        try{
            let pool = await mssql.connect(config)
            return pool
        }catch(e){
            throw new Error(e)
        }

    }


    createRequest =  (request , data = {})=>{
        try {
            let keys = Object.keys(data)
            keys.map((keyValue)=>{
                request.input(keyValue, data[keyValue])
            })
            return request    
        } catch (error) {
            throw new Error(error)
        }
    }

    exec = async(procedureName,data = {})=>{

        let request = await (await this.connectionPool).request()
        request = this.createRequest(request,data)
        let results = await request.execute(procedureName)
        return results

    }

    query = async(query)=>{
        let results = await (await this.connectionPool).request().query(query)
        return results;
    }


}

module.exports = {
    exec: new dbHelper().exec,
    query: new dbHelper().query
}