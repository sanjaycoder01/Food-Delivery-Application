import { useState } from 'react'

const Section = ({ title, description, visible, setvisible }) => {
  return (
    <div className="border border-black p-3 m-3">
      <h3>{title}</h3>
      {visible ? (
        <button
          onClick={() => setvisible(false)}
          className="text-xl  cursor-pointer underline"
        >
          hide
        </button>
      ) : (
        <button
          onClick={() => setvisible(true)}
          className="text-xl  cursor-pointer underline"
        >
          show
        </button>
      )}

      {/* {visible && <h3>{description}</h3>} */}
      {visible && (
        <h3
          style={{ display: visible ? 'block' : 'none' }}
          className="text-xl mt-3"
        >
          {description}
        </h3>
      )}
    </div>
  )
}

const Instamart = () => {
  const [visection, setvisection] = useState('about')
  return (
    <div>
      <Section
        title={'About Instamrt'}
        description={'This is the section of about instamart'}
        visible={visection == 'about'}
        setvisible={() => {
          setvisection('about')
        }}
      />
      <Section
        title={'About product'}
        description={'This is the section of about instamart'}
        visible={visection == 'product'}
        setvisible={() => {
          setvisection('product')
        }}
      />
      <Section
        title={'About career'}
        description={'This is the section of about instamart'}
        visible={visection == 'career'}
        setvisible={() => {
          setvisection('career')
        }}
      />
    </div>
  )
}
export default Instamart
