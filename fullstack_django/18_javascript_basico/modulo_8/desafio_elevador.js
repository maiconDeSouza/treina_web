const Elevador = {
    andar: 0,
    up(){
        if (this.andar < 3){
            this.andar++
            return `Subimos para o ${this.andar}° andar`
        } else {
            return `O ${this.andar}° é ultimo`
        }
    },

    down(){
        if (this.andar === 0){
            return `Não há piso abaixo do terreo`
        } else if (this.andar === 1){
            this.andar--
            return `Descemos para o Terreo`
        } else {
            this.andar--
            return `Descemos para o ${this.andar}° andar`
        }
    }
}