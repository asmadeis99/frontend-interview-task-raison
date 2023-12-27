
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { Route, Switch } from 'react-router'

import { FormInput } from './FormInput'
import { FormCheckbox } from './FormCheckbox'

export const LoginPage = () => {
    const [email, setEmail] = useState<string>(sessionStorage.getItem('email') || '')
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [isEmailValid, setIsEmailValud] = useState<boolean>(false)

    let countdown = 500 //ms
    let isHoldValid = false
    const history = useHistory()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // Сохранение email в localStorage
    useEffect(() => {
        sessionStorage.setItem('email', email)
        setIsEmailValud(emailRegex.test(email))
        return () => {
            sessionStorage.removeItem('email')
        }
    }, [email])

    // Обработчик изменения состояния email
    const handleEmailChange = (value: string) => {
        setEmail(value)
    }

    // Обработчик изменения состояния чекбокса
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)
    }

    const historyBack = () => {
        history.goBack()
    }

    // Обработчик удержания кнопки
    const handleHold = () => {
        isHoldValid = true
        const interval = setInterval(() => {
            countdown -= 100
            console.log(countdown)
            if (countdown <= 0) {
                clearInterval(interval)
                // Перенаправление на следующую страницу после успешного удержания кнопки
                if (isHoldValid) {
                    history.push('/login/step-2')
                }
            }
        }, 100)
    }

    // Обработчик отпускания кнопки
    const handleRelease = () => {
        isHoldValid = false
    }

    const postEmail = async () => {
        const url = 'http://localhost:4040/endpoint'

        const data = {
            email: 'data',
        }

        var options: any = {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': 'true',
                'Access-Control-Allow-Credentials': 'true',
            },
            body: JSON.stringify(data),
        }
        try {
            await fetch(url, options)
            alert('success!')
        } catch (error) {
            console.log(error)
            alert('Errro!')
        }
    }

    return (
        <Switch>
            <Route path="/login/step-1">
                <FormInput value={email} onChange={handleEmailChange} />
                <div className="p-1"></div>
                <FormCheckbox isChecked={isChecked} onChange={handleCheckboxChange} />
                <button
                    className="btn btn-primary mt-auto"
                    onMouseDown={handleHold}
                    onMouseUp={handleRelease}
                    disabled={!(isEmailValid && isChecked)}
                >
                    Hold to proceed
                </button>
            </Route>
            <Route path="/login/step-2">
                <FormInput value={email} onChange={handleEmailChange} />
                <div className="flex justify-between space-x-4 mt-auto">
                    <button className="btn mt-auto flex-1" onClick={historyBack}>
                        Cancel
                    </button>
                    <button className="btn btn-primary mt-auto flex-1" onClick={postEmail}>
                        Confirm
                    </button>
                </div>
            </Route>
        </Switch>
    )
}
