/* eslint-disable react/prop-types */
export default function ProfileView({user}) {
  return (
    <section>
        <h2>User profile</h2>
        <article>
          <div>
            <img src={user.avatar} alt={user.first_name} />
          </div>
          <div>
            <h3>{user.first_name} {user.last_name}</h3>
            <p>Company: {user.company} - Email:{user.email} - Address:{user.address}</p>
          </div>
        </article>
    </section>
  )
}
