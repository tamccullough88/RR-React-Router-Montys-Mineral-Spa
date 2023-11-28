

export default function Packages({ packages }) {
    const display = packages.map((spaPackages, i) => {
        return <li key={i}>{spaPackages}</li>
    })

    return (
        <div>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                    {display}
                </div>

            </div>
        </div>
    )
}