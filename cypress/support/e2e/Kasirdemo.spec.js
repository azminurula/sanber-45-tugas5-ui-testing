describe('Login Account', () => {
    it('Open page kasir demo', () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.url().should('include', '/login')
        cy.wait(3000)
    })

    it('Error login without input email and password', () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.get('#email').should('be.empty')
        cy.get('#password').should('be.empty')
        cy.contains("login").click()
        cy.wait(3000)
    })

    it('Error login without email', () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.get('#email').should('be.empty')
        cy.get('#password').type('Azminurul28')
        cy.contains("login").click()
        cy.wait(3000)
    })

    it('Error login without password', () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.get('#email').type('amoorastore2022@gmail.com')
        cy.get('#password').should('be.empty')
        cy.contains("login").click()
        cy.wait(3000)
    })

    it('Error login with invalid format email ', () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.get('#email').type('amoorastore2022')
        cy.get('#password').type('Azminurul28')
        cy.contains("login").click()
        cy.wait(3000)
    })

    it('Error login with invalid credential email', () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.get('#email').type('amoorastore@gmail.com')
        cy.get('#password').type('Azminurul28')
        cy.contains("login").click()
        cy.wait(3000)
    })

    it('Error login with invalid credential password', () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.get('#email').type('amoorastore2022@gmail.com')
        cy.get('#password').type('Azmi28')
        cy.contains("login").click()
        cy.wait(3000)
    })

    it('Success login', () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.get('#email').type('amoorastore2022@gmail.com')
        cy.get('#password').type('Azminurul28')
        cy.contains("login").click()
        cy.wait(3000)
    })

})


describe('Open Page Category', () => {
    it('Open page dashboard category', () => {
        cy.url().should('include', '/dashboard')
        cy.get('[href="/categories"] > .css-ewi1jp').click()
        cy.wait(3000)
    })

    it('Open page add category', () => {
        cy.get('.css-1piskbq').click()
        cy.wait(3000)
    })

    it('Error save without input name and description', () => {
        cy.get('#nama').should('be.empty')
        cy.get('#deskripsi').should('be.empty')
        cy.contains("simpan").click()
        cy.wait(3000)
    })

    it('Error save without input name', () => {
        cy.get('#nama').should('be.empty')
        cy.get('#deskripsi').type('Pakaian anak sehari-hari')
        cy.contains("simpan").click()
        cy.wait(3000)
    })

    it('Sucess add category using only input name', () => {
        cy.get('#nama').type('Seragam Sekolah')
        cy.get('#deskripsi').clear()
        cy.wait(1000)
        cy.contains("simpan").click()
        cy.wait(3000)
    })

    it('Success add category using input name and description', () => {
        cy.get('.css-1piskbq').click()
        cy.get('#nama').type('Pakaian tidur dewasa')
        cy.get('#deskripsi').type('Berbagai jenis pakaian tidur dewasa seperti daster, setelan')
        cy.contains("simpan").click()
        cy.wait(3000)
    })

    it('Search category', () => {
        cy.get('.chakra-input').type('seragam')
        cy.wait(5000)
        cy.get('.chakra-input').clear()
        cy.wait(3000)
    })

    it('Edit description category', () => {
        cy.contains('td', 'Seragam Sekolah').parent('tr').within(() => {
            cy.get('td').eq(2).click()
            cy.wait(1000)
            cy.contains('a', 'ubah').click()
            cy.wait(1000)
        })
        cy.get('#deskripsi').type('Tersedia pakaian seragam sekolah umum maupun custom')
        cy.wait(3000)
        cy.get('.chakra-button').click()
        cy.wait(3000)

    })

    it('Delete category', () => {
        //cy.contains('td','Tas Anak').parent('tr').children('td').find('button').eq(2).click()
        cy.contains('td', 'Tas Anak').parent('tr').within(() => {
            cy.get('td').eq(2).click()
            cy.wait(1000)
            cy.contains('button', 'hapus').click()
            cy.wait(1000)
        })
        cy.contains('button', 'Delete').click()
        cy.wait(5000)
    })

})


describe('Open Page product', () => {
    it('Open page dashboard product', () => {
        // cy.url().should('include', '/dashboard')
        cy.get('[href="/products"] > .css-ewi1jp').click()
        cy.wait(3000)
    })

    it('Open page add product', () => {
        cy.get('.css-1piskbq').click()
        cy.wait(3000)
    })

    it('Error save without input data', () => {
        cy.get('#nama').should('be.empty')
        cy.get('#deskripsi').should('be.empty')
        cy.contains("harga beli").should('not.have.value')
        cy.contains("harga jual").should('not.have.value')
        cy.get('#stok').should('be.empty')
        cy.get('#kategori').should('be.empty')
        cy.contains("simpan").click()
        cy.wait(1000)
        cy.window().scrollTo(0, 100)
        cy.wait(3000)
    })

    it('Error save using only input name', () => {
        cy.get('#nama').type('Misora Set Outer')
        cy.get('#deskripsi').should('be.empty')
        cy.contains("harga beli").should('not.have.value')
        cy.contains("harga jual").should('not.have.value')
        cy.get('#stok').should('be.empty')
        cy.get('#kategori').should('be.empty')
        cy.contains("simpan").click()
        cy.wait(1000)
        cy.window().scrollTo(0, 100)
        cy.wait(3000)
    })

    it('Error save using only input name and description', () => {
        // cy.get('#nama').clear().type('Misora Set Outer')
        cy.get('#deskripsi').type('Outer : Cotton Peachyed')
        cy.contains("harga beli").should('not.have.value')
        cy.contains("harga jual").should('not.have.value')
        cy.get('#stok').should('be.empty')
        cy.get('#kategori').should('be.empty')
        cy.contains("simpan").click()
        cy.wait(1000)
        cy.window().scrollTo(0, 100)
        cy.wait(3000)
    })

    it('Error save using only input name, description, and cost greater than price', () => {
        //  cy.get('#nama').clear().type('Misora Set Outer')
        //   cy.get('#deskripsi').clear().type('Outer : Cotton Peachyed')
        cy.contains("harga beli").type('229.000')
        cy.contains("harga jual").type('156.750')
        cy.get('#stok').should('be.empty')
        cy.get('#kategori').should('be.empty')
        cy.contains("simpan").click()
        cy.wait(1000)
        cy.window().scrollTo(0, 100)
        cy.wait(3000)
    })

    it('Error save using only input name, description, cost, price', () => {
        //  cy.get('#nama').clear().type('Misora Set Outer')
        //   cy.get('#deskripsi').clear().type('Outer : Cotton Peachyed')
        cy.contains("harga beli").type('156.750')
        cy.contains("harga jual").type('229.000')
        cy.get('#stok').should('be.empty')
        cy.get('#kategori').should('be.empty')
        cy.contains("simpan").click()
        cy.wait(1000)
        cy.window().scrollTo(0, 100)
        cy.wait(3000)
    })

    it('Success add produtc using input name, description, cost, price, stock and category', () => {
        //  cy.get('#nama').clear().type('Misora Set Outer')
        //   cy.get('#deskripsi').clear().type('Outer : Cotton Peachyed')
        //   cy.contains("harga beli").type('156.750')
        //  cy.contains("harga jual").type('229.000')
        cy.get('#stok').type('15')
        cy.get('#kategori').click()
        cy.wait(1000)
        cy.get(':nth-child(3) > .css-u3dlpe').click()
        cy.wait(1000)
        cy.contains("simpan").click()
        cy.wait(1000)
        cy.window().scrollTo(0, 100)
        cy.wait(3000)
    })


    it('Search product by name', () => {
        cy.get('.css-0 > .chakra-input__group > .chakra-input').type('Yumna One Set')
        cy.wait(5000)
        cy.get('.css-0 > .chakra-input__group > .chakra-input').clear()
        cy.wait(3000)
    })

    it('Search product by choose category', () => {
        cy.get('input[placeholder*="kategori"]').click()
        cy.wait(1000)
        cy.get('#chakra-modal--body-188 > .chakra-table > tbody.css-0 > :nth-child(3) > .css-u3dlpe').click()
        cy.wait(4000)
        cy.get('.chakra-input__right-addon').click()
    })

    it('Edit stock product', () => {
        cy.contains('td', 'Set Outdoor').parent('tr').within(() => {
            cy.get('td').eq(9).click()
            cy.wait(1000)
            cy.contains('a', 'ubah').click()
            cy.wait(1000)
        })
        cy.get('#stok').type('30')
        cy.wait(3000)
        cy.contains("simpan").click()
        cy.wait(3000)
    })

    it('Delete product', () => {
        cy.contains('td', 'Glee Polo Shirt').parent('tr').within(() => {
            cy.get('td').eq(9).click()
            cy.wait(1000)
            cy.contains('button', 'hapus').click({ force: true })
            cy.wait(1000)
        })
        cy.contains('button', 'Delete').click()
        cy.wait(1000)
    })
})



