import axios from 'axios'

var http = {
  // get 请求
  get: function(url,params){
    return new Promise((resolve,reject) => {
      axios.get(url,{
        params:params
      })
        .then((response) =>{
          resolve(response.data)
        })
        .catch((error) => {
          reject( error )
        })
    })
  },
  // post 请求
  post: function(url,params){
    return new Promise((resolve,reject) => {
      axios.post(url,params)
      .then((response) => {
        resolve( response.data )
      })
      .catch((error) => {
        reject( error )
      })
    })
  }
}

export default http 