const nameINP = document.getElementById("name");
const loginINP = document.getElementById("login");
const passwordINP = document.getElementById("password");
const roleINP = document.getElementById("role");
const Modal = document.querySelector('.modal');
const forms = document.querySelectorAll('form');
const aproveBTN = document.querySelector(".approve_button");
const cancelBTN = document.querySelector(".cancel_button");
const employeesLink = document.querySelector(".Empolyees")
const shiftLink = document.querySelector(".Shift")
const ordersLink = document.querySelector(".Orders")
       
const cancelHandler = (event) =>{
    event.preventDefault()
    Modal.style.display = "none";
}

const cancelClickListener = () =>{ 
    cancelBTN.removeEventListener('click', cancelHandler)
}
cancelBTN.addEventListener('click', cancelHandler)

  //Проверка на заполненные поля в месте с кнопкой входа
 aproveBTN.addEventListener('click', (event) => {
   if (nameINP.value === "" ) {
       event.preventDefault();
       alert("Вы заполнили не все поля");
   } else {
       LogIsSuc(event);
        // Вызываем функцию, которая удалит прослушиватель
   }
})


const aproveLink = document.querySelector("a.approve_button");
aproveLink.addEventListener('click', () => {
    tryEnter()
});

function tryEnter(){
    const authorizationSec = document.querySelector(".authorization");
    const AddEmploy = document.querySelector(".add_employ");
    if(authorizationSec.style.display == "none" || Modal.style.display == "none"){
        Modal.style.display = "flex"
        AddEmploy.style.display = "none"
        authorizationSec.style.display = "flex"
                
    }if(authorizationSec.style.display == "block" ){
        authorizationSec.style.display = "none";
        Modal.style.display = "none"
        AddEmploy.style.display = "none"
        
    }
}

function addEmploy(){
    Modal.style.display = "flex";
    const allInps = document.querySelectorAll("input");
}
 
  //Вызывает функции если лог успешен
    function showEmploys(){
        const employeesSec = document.getElementById('employees');
        if(employeesSec.style.display == "none" ){
            employeesSec.style.display = "block";
    
        }else{
             employeesSec.style.display = "none"; 
        }
    }

    //Показывает рабочие смены
    function Shift(){
        const ShiftSec = document.querySelector(".shift");
        if(ShiftSec.style.display == "none" ){
            ShiftSec.style.display = "block";
        }else{
             ShiftSec.style.display = "none"; 
        }
    }
    //Показывает заказы
    function Orders(){
        const OrdersSec = document.querySelector(".orders");
        if(OrdersSec.style.display == "none" ){
            OrdersSec.style.display = "block";
        }else{
            OrdersSec.style.display = "none"; 
    }
}

    employeesLink.addEventListener('click' , () =>{
            return showEmploys()
        
    })

    shiftLink.addEventListener('click', () =>{
        return Shift()
    })

    ordersLink.addEventListener('click', () =>{
        return Orders()
                   
    })

function add_shift(){
    Modal.style.display = "flex"
    const shiftModal = document.querySelector(".shifts")
    document.querySelector(".add_employ").style.display = "none";
    shiftModal.style.display = "flex"
}

function add_Order(){
    const orderModal = document.querySelector('.order');
    document.querySelector(".add_employ").style.display = "none";
    Modal.style.display = "flex"
    orderModal.style.display = "flex"
}