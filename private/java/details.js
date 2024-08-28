document.addEventListener("DOMContentLoaded", function () {
    function getQueryParam(name) {
       const urlParams = new URLSearchParams(window.location.search);
       return urlParams.get(name);
   }

   const eventId = getQueryParam('id');
   
   const events = {
       1: {
           name: "GIL!",
           date: "15/03/2025",
           location: "SALVADOR | CASA DE APOSTAS ARENA FONTE NOVA",
           description: "Apresentações extras da última turnê do artista, TEMPO REI, acontecem nos dias 5 e 6 de abril, na Farmasi Arena",
           price: "180,00",
           availability: "100",
       },
       2: {
           name: "Lenny Kravitz",
           date: "23/11/2024",
           location: "Local do Evento 2",
           description: "Descrição do evento Lenny Kravitz",
           price: "150,00",
           availability: "50",
       },
       3: {
           name: "Busted",
           date: "10/11/2024",
           location: "São Paulo",
           description: "Os amigos James Bourne e Matt Willis, aos 17 anos, tinham um sonho enquanto tocavam no porão de casa, em Southend-On-Sea, na Inglaterra: formar uma banda e, para isso, escolheram até um nome para o grupo, Busted. Em 2000, o trio ficou completo com a chegada do guitarrista Charlie Simpson e, juntos, se tornaram uma banda de pop punk que marcou uma geração com músicas em primeiro lugar das paradas, prêmios e muita popularidade. No ano passado, já na faixa dos 40 anos, os três decidiram voltar aos palcos e anunciaram uma turnê celebrando os 20 anos de carreira e, assim, o Brasil receberá o trio pela primeira vez.",
           price: "200,00",
           availability: "30",
       }
   };
   
   const event = events[eventId];

   if (event) {
       document.getElementById('event-name').textContent = event.name;
       document.getElementById('event-date').textContent = `Data: ${event.date}`;
       document.getElementById('event-location').textContent = `Local: ${event.location}`;
       document.getElementById('event-description').textContent = `Descrição: ${event.description}`;
       document.getElementById('event-price').textContent = `Preço: R$ ${event.price}`;
       document.getElementById('event-availability').textContent = `Ingressos Disponíveis: ${event.availability}`;
       
       document.getElementById('ticket-quantity').addEventListener('input', function() {
           const quantity = parseInt(this.value, 10);
           const totalPrice = quantity * parseFloat(event.price);
           document.getElementById('total-price').textContent = `Valor Total: R$ ${totalPrice.toFixed(2)}`;
       });
   }  
});
