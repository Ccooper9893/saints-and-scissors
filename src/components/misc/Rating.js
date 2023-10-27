export default function Rating() {
    return (
        <div className="ratings">
            <div className="rating w-4/5">
                <input type="radio" name="rating-1" className="mask mask-star glass bg-yellow-300"/>
                <input type="radio" name="rating-1" className="mask mask-star glass bg-yellow-300"/>
                <input type="radio" name="rating-1" className="mask mask-star glass bg-yellow-300"/>
                <input type="radio" name="rating-1" className="mask mask-star glass bg-yellow-300"/>
                <input type="radio" name="rating-1" className="mask mask-star glass bg-yellow-300"/>
            </div>
        </div>
    )
}