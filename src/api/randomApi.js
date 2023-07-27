import {instances} from "./instances";


class RandomApi {
    getRandom = async () => {
        try {
            const response = await instances.get('?results=10')
            return response.data
        }catch (e) {
            console.log(e)
        }
    }
}
export const randomApi = new RandomApi()