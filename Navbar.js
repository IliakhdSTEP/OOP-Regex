class Navbar {
    constructor(bgcolor, position, output) {
        this.bgcolor = bgcolor;
        this.position = position;
        this.output = output;
    }

    getNavbar() {
        return `
            <nav style="background-color: ${this.bgcolor}; text-align: ${this.position};">
                ${this.output}
            </nav>
        `;
    }
}

export default Navbar;