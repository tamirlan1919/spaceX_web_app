import React from 'react'

const Main = () => {
  return (
    <div>
        <main>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>Путешествие</h1>
                        <p>на красную планету</p>
                        <button>Начать путешествие</button>
                    </div>
                    <div className="col">
                        <div className="wrapper">
                            <div className="info">
                                <p>мы</p>
                                <h2>1</h2>
                                <p>на рынке</p>
                            </div>
                            <div className="info">
                                <p>гарантируем</p>
                                <h2>50%</h2>
                                <p>безопасность</p>
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className="info">
                                <p>календарик</p>
                                <h2>2001 <sub>г.</sub></h2>
                                <p>в подарок</p>
                            </div>
                            <div className="info">
                                <p>путешествие</p>
                                <h2>597</h2>
                                <p>дней</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Main