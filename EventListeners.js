// テスト
class EventListeners{

    constructor(configs){
        this.configs = configs
    }

    #switch(add_or_remove){
        this.configs.forEach(config => {
            if(config instanceof EventListenerConfig == false){
                throw Error("configはEventListenerConfigのインスタンスである必要があります")
            }

            if(add_or_remove == "add"){
                config.elm.addEventListener(config.type,config.callback)
            }else{
                config.elm.removeEventListener(config.type,config.callback)
            }
        });
    }

    add(){
        this.#switch("add")
    }

    remove(){
        this.#switch("remove")
    }
}

class EventListenerConfig{
    constructor(elm,type,callback){
        this.elm = elm
        this.type = type
        this.callback = callback
    }
}