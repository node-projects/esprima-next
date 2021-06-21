class aa {
    bb;
    #cc;
    dd = 1;
    #ee = 2;
    ff() { }
    #gg() { }
    static hh;
    static #jj;
    static kk = 1;
    static #ll = 2;
    static mm() { }

    hh() {
        let a = this.#cc;
        let b = this.#ee;
        let c = this.#gg();
        let d = aa.hh;
        let e = aa.#jj;
        let f = aa.kk;
        let g = aa.#ll;
        let h = aa.mm();
    }
}
