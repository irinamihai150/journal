import React, { useState } from "react"
import "./App.css"
// import CustomNav from "./CustomNav"
import EntryCard from "./EntryCard"

const ProfilePage = () => {
	const [userId, setUserId] = useState(null)
	return (
		<div>
			{/* <CustomNav /> */}
			<EntryCard userId={userId} setUserId={setUserId} />
		</div>
	)
}

export default ProfilePage
