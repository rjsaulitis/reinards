import css from "./form.module.scss"
import { Component } from "react"

import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

class BookingForm extends Component {

  constructor(props) {
      super(props);

      init("z-bHxu1E8B1HycJGj");
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
    let booking_name = document.getElementById("booking_name").value;
    let booking_email = document.getElementById("booking_email").value;
    let booking_date = document.getElementById("booking_date").value;
    let booking_topic = document.getElementById("booking_topic").value;

    if(!booking_name || !booking_email || !booking_date || !booking_topic){
      alert("Lūdzu, aizpildi visus laukus!")
      return;
    }

    document.getElementById("submit").textContent = "Forma tiek apstrādāta...";
 
    this.sendMail({booking_name: booking_name, booking_email: booking_email, booking_date: booking_date, booking_topic: booking_topic});
  }

  sendMail = (variables) => {
    emailjs.send( 'service_e0k5qaj', 'template_qznt8xc', variables ).then(res => {
            document.getElementById("bookingForm").reset();
            document.getElementById("submit").textContent = "Pieprasījums nosūtīts";
            alert("Ziņa nosūtīta veiksmīgi!");
        })
        .catch(err => {
            document.getElementById("submit").textContent = "Pieteikties";
            alert("Ziņu neizdevās nosūtīt. Pārliecinies, ka visi lauki aizpildīti un internets ieslēgts.");
            console.error('Oh well, you failed. Here some thoughts on the error that occured:', err);
        })
  }

  render() {
    return (
      <div className="bm-container pb5 pt3">
          <form id="bookingForm" className={"flex flex-column "+css.form}>
              <label htmlFor="booking_name">Tavs vārds</label>
              <input id="booking_name" className="mb3" type="text" placeholder="Jānis Ķirbītis"></input>
              
              <label htmlFor="booking_email">Tavs e-pasts</label>
              <input id="booking_email" className="mb3" type="email" placeholder="janiskirbitis@gmail.com"></input>
              
              <label htmlFor="booking_date">Vēlamais laiks (ne ātrāk kā rīt pkst 10:00)</label>
              <input id="booking_date" className="mb3" type="text" placeholder={new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getDate() + "/" + new Date(new Date().getTime() + 24 * 60 * 60 * 1000).getMonth() + " 10:00"}></input>
              
              <label htmlFor="booking_topic">Ar ko nepieciešama palīdzība?</label>
              <textarea id="booking_topic" className="mb3" placeholder="..."></textarea>
  
              <button id="submit" type="submit" onClick={this.handleSubmit}>Pieteikties</button>
          </form>
      </div>
    )
  }
}

export default BookingForm;