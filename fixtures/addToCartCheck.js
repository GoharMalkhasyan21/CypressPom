class AddToCart {
    elements = {
        product_card: "a.hrefch",
        add_to_card: '[class="btn btn-success btn-lg"]',
        cart: "a#cartur"
    }

    clickOnProduct () {
        cy.get(this.elements.product_card).contains("Samsung galaxy s6").click();
        cy.get(this.elements.add_to_card).click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Product added.`)
        })
        cy.get(this.elements.cart).click();
        cy.get('#tbodyid tr :nth-child(2)').should("have.text","Samsung galaxy s6")
    }
    
}

export default AddToCart;