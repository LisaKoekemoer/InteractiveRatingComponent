import { useState } from "react";
import './App.css';
import star from './images/icon-star.svg';
import thankYou from './images/illustration-thank-you.svg';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [items, setItems] = useState("")

  const Button = ({ number }) => {
    return <button onClick={() => setItems(number)}>{number}</button>
  }

  return (
    <div>
      {!isSubmitted && (
        <div className='interactive-component'>

          <div className='starImg'>
            <img src={star} alt="" />
          </div>

          <div className='rating-cta'>
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support 
              request. All feedback is appreciated to help us 
              improve our offering!</p>
          </div>

          <div className='ratingNo'>
            <ul>
              <li className='rating'>
                <Button number={1}/>
              </li>
              <li className='rating'>
                <Button number={2}/>
              </li>
              <li className='rating'>
                <Button number={3}/>
              </li>
              <li className='rating'>
                <Button number={4}/>
              </li>
              <li className='rating'>
                <Button number={5}/>
              </li>
            </ul>
          </div>

          <div className='submit-btn'>
          <button onClick={() => setIsSubmitted(true)} type='submit'>SUBMIT</button>  
          </div>

      </div>
      )}

      { isSubmitted && <ThankYou items={items} setIsSubmitted={setIsSubmitted} /> }
    </div>
  );
}

const ThankYou = ({items, setIsSubmitted }) => {
  return (
    <>
      <div className='interactive-component'>
        <img className='thankuImg' src={thankYou} alt="" />
        <div className='rating-result'>
          <p>You selected {items} out of 5</p>
        </div>
        <div className='thankyouMessage'>
          <h2>Thank you!</h2>
          <p>We appreciate you taking the time to give a rating. If you ever need
             more support, don't hesitate to get in touch!</p>
        </div>
      </div>
    </>
  )
}

export default App;
