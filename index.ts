import axios from 'axios'
import { services, Action, Config } from './services'


async function sender(action: Action, data = {}) {
    const config = { ... services[action]}
    const result = await axios(config) 
    return result as typeof config["data"]
}


const teste = await sender("Auth",)

console.log(teste)


class Obj {
    "one": "1"
    "two": "2"
}

type aaaa = InstanceType<typeof Obj>


type