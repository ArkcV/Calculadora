function Calculadora(){
    //Selecao de Elementos
    this.display = document.querySelector('.display');

    //Metodo ou Objeto
    this.iniciar = () => this.capturaClique();
     
    //Eventos
    this.capturaClique = () => {
        document.addEventListener('click',e => {
            //Encontrando os botoes
            const el = e.target;
            if(el.classList.contains('btn-num')) this.adNum(el);
            if(el.classList.contains('btn-clear'))this.clear(el);
            if(el.classList.contains('btn-del')) this.del(el);
            if(el.classList.contains('btn-eq')) this.eq(el);
        });
    };

    //Funcoes

    this.adNum = (el) => this.display.value += el.innerText; this.display.focus();

    this.clear = () => this.display.value = '';
    
    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.eq = () => {
        try {
            const res = eval(this.display.value);
            if(!res){
                alert('Conta inválida');
                return;
            }

            this.display.value = res;
            
        }catch(e){
            alert('Erro');
            return;
        }
    };
}

const calculadora = new Calculadora();
calculadora.iniciar();