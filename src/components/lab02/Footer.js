
export default function Footer() {
    return (
        <div className="bg-dark py-5" style={{ height: '50vh' }}>
            <div className="container d-flex flex-wrap">
                    <div className={`position-relative p-2 w-100`}>
                        <label htmlFor='name' className="position-absolute bg-dark label-cus text-light">
                            Your Name
                        </label>
                        <input
                            type='text'
                            className="rounded-3 input-cus w-100 bg-dark border-light"
                            placeholder={`Enter your name `}
                            id='name'
                            name='name'
                            value=''
                        
                        />
                    </div>
              
                    <div className={`position-relative p-2 w-100`}>
                        <label htmlFor='name' className="position-absolute bg-dark label-cus text-light">
                            Your Email
                        </label>
                        <input
                            type='text'
                            className="rounded-3 input-cus w-100 bg-dark border-light"
                            placeholder={`Enter your name `}
                            id='name'
                            name='name'
                            value=''
                        
                        />
                    </div>
                    <div className={`position-relative p-2 w-100`}>
                        <label htmlFor='name' className="position-absolute bg-dark label-cus text-light">
                            Content
                        </label>
                        <input
                            type='text'
                            className="rounded-3 input-cus w-100 bg-dark border-light"
                            placeholder={`Enter your name `}
                            id='name'
                            name='name'
                            value=''
                        
                        />
                    </div>
            </div>
        </div>
    )
}