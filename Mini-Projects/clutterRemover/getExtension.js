function getExtension(s) {
    const check = s.lastIndexOf('.');
    console.log(check);
    if (check === -1)
        return -1;
    else {
        s = String(s);
        let res = "";
        for (let i = s.lastIndexOf('.'); i < s.length; i++) {
            res += s[i];
        }
        return res;
    }
}

module.exports = { getExtension};



