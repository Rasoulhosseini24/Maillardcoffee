// external js: isotope.pkgd.js

// init Isotope
var iso = new Isotope( '.grid', {
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });
  
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function( itemElem ) {
      var number = itemElem.querySelector('.number').textContent;
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function( itemElem ) {
      var name = itemElem.querySelector('.name').textContent;
      return name.match( /ium$/ );
    }
  };
  
  // bind filter button click
  var filtersElem = document.querySelector('.filters-button-group');
  filtersElem.addEventListener( 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    // use matching filter function
    filterValue = filterFns[ filterValue ] || filterValue;
    iso.arrange({ filter: filterValue });
  });
  
  // change is-checked class on buttons
  var buttonGroups = document.querySelectorAll('.button-group');
  for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup( buttonGroup );
  }
  
  function radioButtonGroup( buttonGroup ) {
    buttonGroup.addEventListener( 'click', function( event ) {
      // only work with buttons
      if ( !matchesSelector( event.target, 'button' ) ) {
        return;
      }
      buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
      event.target.classList.add('is-checked');
    });
  }
  



  // for modal

 
    document.querySelectorAll('.bbbb').forEach(ee => {


      ee.addEventListener('click', () =>{


  
      document.querySelector(".bb").innerHTML = `<div class="modal-content">
      <div class="modal-header">
       <h5 class="modal-title" id="exampleModalLabel">Buy Coffee</h5>
       <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="btn-close"></button>
       </div>
  <div class="modal-body"> 
   <form id="fs-frm" name="registration-form" accept-charset="utf-8" action="https://formspree.io/f/meqbolyb" method="post";> 
     <fieldset id="fs-frm-inputs">
       <label for="full-name">Full Name</label>
       <input type="text" name="name" id="full-name" placeholder="First and Last" required="">
       <label for="email-address">Email Address</label>
       <input type="email" name="_replyto" id="email-address" placeholder="Your E-mail" required="">
       <label for="telephone">Telephone Number</label>
       <input type="telephone" name="telephone" id="telephone" placeholder="09123456789" required="">
       <label for="street-address">Street Address</label>
       <input type="text" name="street" id="street-address" placeholder="Street" required="">
       <fieldset class="locale">
         <legend>Location</legend>
         <input type="text" name="city" placeholder="City" required="">
         <select name="state" onChange="irancitylist(this.value);" required="">
           <option value="0">لطفا استان را انتخاب نمایید</option>
           <option value="تهران">تهران</option>
           <option value="گیلان">گیلان</option>
           <option value="آذربایجان شرقی">آذربایجان شرقی</option>
           <option value="خوزستان">خوزستان</option>
           <option value="فارس">فارس</option>
           <option value="اصفهان">اصفهان</option>
           <option value="خراسان رضوی">خراسان رضوی</option>
           <option value="قزوین">قزوین</option>
           <option value="سمنان">سمنان</option>
           <option value="قم">قم</option>
           <option value="مرکزی">مرکزی</option>
           <option value="زنجان">زنجان</option>
           <option value="مازندران">مازندران</option>
           <option value="گلستان">گلستان</option>
           <option value="اردبیل">اردبیل</option>
           <option value="آذربایجان غربی">آذربایجان غربی</option>
           <option value="همدان">همدان</option>
           <option value="کردستان">کردستان</option>
           <option value="کرمانشاه">کرمانشاه</option>
           <option value="لرستان">لرستان</option>
           <option value="بوشهر">بوشهر</option>
           <option value="کرمان">کرمان</option>
           <option value="هرمزگان">هرمزگان</option>
           <option value="چهارمحال و بختیاری">چهارمحال و بختیاری</option>
           <option value="یزد">یزد</option>
           <option value="سیستان و بلوچستان">سیستان و بلوچستان</option>
           <option value="ایلام">ایلام</option>
           <option value="کهگلویه و بویراحمد">کهگلویه و بویراحمد</option>
           <option value="خراسان شمالی">خراسان شمالی</option>
           <option value="خراسان جنوبی">خراسان جنوبی</option>
           <option value="البرز">البرز</option>
       </select>
         <input type="text" name="postal-code" placeholder="123456789" required="">
       </fieldset>
       <label for="note">Product Type</label>
       <textarea rows="2" name="note" id="note" placeholder="Include any additional information"></textarea>
       <input type="hidden" name="_subject" id="email-subject" value="Registration Form Submission">
     </fieldset>
     <a id="subbb"><input type="submit" value="Buy"></a>
     <p id="my-form-status"></p>
   </form>
  </div>
  </div>
  `
  var form = document.getElementById("fs-frm");
  window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
  }
  
  
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        status.innerHTML = "Thank you! We'll check your message.";
        status.classList.toggle('success')
       
        window.alert("Thank you for your purchase! Please send the payment receipt here in the skype chat and follow up your purchase process.")
       
       
        let statuss = document.getElementById("subbb")
       
        if( statuss=true){
  
          window.open('https://join.skype.com/invite/kzAOWbvoiTEd','_blank'); 
       }
        form.reset()
  
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            status.innerHTML = "Oops! There was a problem, Please try again or check your internet"
            status.classList.toggle('error')
          }
        })
      }
    }).catch(error => {
      status.innerHTML = "Oops! There was a problem, Please try again or check your internet"
      status.classList.toggle('error')
    });
    
  
  }
  form.addEventListener("submit", handleSubmit)
  
  return
  
  
    })



      
    });
    