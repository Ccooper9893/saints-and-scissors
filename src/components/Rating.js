export default function Rating() {
    return (
        <div className="ratings">
            <div className="rating">
                <input type="radio" name="rating-1" className="mask mask-star" checked />
                <input type="radio" name="rating-1" className="mask mask-star" checked />
                <input type="radio" name="rating-1" className="mask mask-star" checked />
                <input type="radio" name="rating-1" className="mask mask-star" checked />
                <input type="radio" name="rating-1" className="mask mask-star" checked />
            </div>
        </div>
    )
}