import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';

import LoginForm from '../../src/app/components/login-form.jsx';

describe('LoginForm', () => {

	afterEach(cleanup);

	it('should exist', () => {	
		expect(LoginForm).toBeDefined();
	});

	it('should render a text form with a text input', () => {	
		const { container } = render(<LoginForm />);
		
		const formEls = container.querySelectorAll('form');
		expect(formEls.length).toBe(1);

		const textInputEls = container.querySelectorAll('input[type="text"]');
		expect(textInputEls.length).toBe(1);
	});

	it('calls submit callback on submit', () => {
		const handleLoginSubmit = jest.fn();
		const { container } = render(<LoginForm handleLoginSubmit={handleLoginSubmit} />);
		const loginSubmitEl = container.querySelector('input[type="submit"]')
		fireEvent.click(loginSubmitEl);
		expect(handleLoginSubmit).toHaveBeenCalled();
	});
});