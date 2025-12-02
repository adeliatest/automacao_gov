import Login from "../pages/login";

context('Login', () => {

    it('Login - Digitar letras e símbolos no campo de cpf', () => {
        Login.visitarPaginaLogin();
        Login.digitarCpf();
    });
});