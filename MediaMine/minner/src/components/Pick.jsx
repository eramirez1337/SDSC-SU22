function Pick({ title, bold, date, image }) {
    return (
        <div className="pick-holder">
            <img className="pick-image" alt="pick" src={image} />
            <div className="pick-details">
                <span className="pick-title">{title}</span>
                <span className="pick-bold">{bold}</span>
                <span className="pick-date">{date}</span>
            </div>
        </div>
    );
}

export default Pick;
