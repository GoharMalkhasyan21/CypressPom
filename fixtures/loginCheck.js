class LoginDemoblaze {
    open() {
        cy.visit("https://demoblaze.com/");
    }
    elements = {
        loginbutton: "#login2",
        username: "#loginusername",
        password: "#loginpassword",
        loginbutton_from_pop_up: "button[class*='btn-primary']",
        welcom_text: "a#nameofuser",
        logout: "a#logout2",
        cart: "a#cartur"
    }

    value = {
        username_value: "new_test_user",
        password_value: "password"
    }

    login (username, password) {
        cy.get(this.elements.loginbutton).click();
        cy.get(this.elements.username).type(username);
        cy.get(this.elements.password).type(password);
        cy.get(this.elements.loginbutton_from_pop_up).contains("Log in").click();
    }

    checkWelcomeText () {
        cy.get(this.elements.welcom_text).should("exist").and("be.visible").and("have.text", `Welcome ${this.value.username_value}`);
    }

    checkMenuNavBar () {
        cy.get(this.elements.logout).should("exist").and("be.visible");
        cy.get(this.elements.cart).should("exist").and("be.visible");
        cy.get(this.elements.login).should("not.exist");
    }
}

export default  LoginDemoblaze;