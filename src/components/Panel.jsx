function Panel({children, judul}) {
    return (
        <section className="Panel">
            {<h2>{judul}</h2>}
            <div className="daftar-menu">{children}</div>
        </section>
    );
}

export default Panel;