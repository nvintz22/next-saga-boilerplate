import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import { mockStore } from './_test_util/store'
import Home from '../pages'

const initialState = {
    Template: {
        name: 'juan dela cruz'
    }
}

describe('home page', () => {
    it('should render successfully', () => {
        const store = mockStore(initialState)
        render(
            <Provider store={store}>
                <Home />
            </Provider>
        )
        expect(screen.getByTestId('home-page-test')).toBeTruthy()
    })
})