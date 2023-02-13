import Data from "../projectInfo.json"
function ProjectList(props) {

    return (

        <section>

            <div>
                {Data.map((post, i) => {
                    return (
                        <>
                            <h4 key={post.name}>Name: {post.name}</h4>
                            <h4 key={post.livedate}>Live Date:{post.livedate}</h4>
                            <h4 key={post.role}>Role: {post.role}</h4>
                            <a key={post.github} href={post.github}>Github Link</a>
                            <a key={post.deployment} href={post.deployment}>Deployed Link</a>
                            <img key={post.images} src={post.images}></img>
                        </>
                    )
                })}

            </div>
        </section>

    )
}

export default ProjectList;