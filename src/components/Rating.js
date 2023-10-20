export default function Rating() {
    return (
        <div className="ratings">
            <div className="rating w-4/5">
                <input type="radio" name="rating-1" className="mask mask-star bg-lime-500" checked />
                <input type="radio" name="rating-1" className="mask mask-star bg-lime-500" checked />
                <input type="radio" name="rating-1" className="mask mask-star bg-lime-500" checked />
                <input type="radio" name="rating-1" className="mask mask-star bg-lime-500" checked />
                <input type="radio" name="rating-1" className="mask mask-star bg-lime-500" checked />
            </div>
        </div>
    )
}