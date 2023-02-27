import { Selector } from 'testcafe'

// prettier-ignore
fixture `Login Test`
  .page `http://zero.webappsecurity.com`

test('User cannot login with invalid credentials', async t => {
	const signInButton = Selector('#signin_button')
	await t.click(signInButton)

	const loginForm = Selector('#login_form')
	await t.expect(loginForm.exists).ok()

	const usernameInput = Selector('#user_login')
	const passwordImput = Selector('#user_password')
	await t.typeText(usernameInput, 'invalid username', { paste: true })
	await t.typeText(passwordImput, 'invalid password', { paste: true })

	const submitButton = Selector('.btn-primary')
	await t.click(submitButton)

	const errorMessage = Selector('.alert-error').innerText
	await t.expect(errorMessage).contains('Login and/or password are wrong.')
})
