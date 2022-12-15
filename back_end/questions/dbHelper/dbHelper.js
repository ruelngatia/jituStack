const mssql = require('mssql')
const {config} = require('../dbConfig/config')


class DBHelper{

    constructor(){
        this.connectionPool = this.createConnection()
    }


    createConnection = async()=>{
        try{
            let pool = await mssql.connect(config)
            return pool
        }catch(e){
            throw new  Error(e)

        }
    }

    createRequest = (request,data={})=>{
       try {
        let key = Object.keys(data)
        key.map((keyValues)=>{
            request.input(keyValues,data[keyValues])
        })
        return request;
       } catch (error) {
        throw new Error(error)
       }
    }

    exec = async(storedProcedureName,data={})=>{
        let request = await  (await this.connectionPool).request()
        request = this.createRequest(request,data)
        let result = await request.execute(storedProcedureName)
        return result
    }

    query = async (query)=>{
        let results = await (await this.connectionPool).request().query(query)
        return results;
    }


}

module.exports = {
    exec : new DBHelper().exec,
    query : new DBHelper().query,
}