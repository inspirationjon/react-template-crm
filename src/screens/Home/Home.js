import './Home.scss'
import React from 'react'
import Table from '../../components/Table/Table'

function Home() {
	return (
		<>
			<div className="home">
				<Table>
					<thead>
						<tr>
							<th>ID</th>
							<th>ism</th>
							<th>familiya</th>
							<th>VIloyati</th>
							<th>yoshi</th>
							<th>relpy</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>6</td>
							<td>Bobur</td>
							<td>Mavlonov</td>
							<td>Sirdaryo</td>
							<td>21</td>
							<td><button>reply</button></td>
						</tr>
						<tr>
							<td>5</td>
							<td>Abdullatifxon</td>
							<td>Anvarxonov</td>
							<td>Qoraqalpog’iston</td>
							<td>42</td>
							<td><button>reply</button></td>
						</tr>
						<tr>
							<td>4</td>
							<td>Ali</td>
							<td>Zairov</td>
							<td>Andijon</td>
							<td>16</td>
							<td><button>reply</button></td>
						</tr>
						<tr>
							<td>3</td>
							<td>Yoqubjon</td>
							<td>Ziyotov</td>
							<td>Qashqadaryo</td>
							<td>150</td>
							<td><button>reply</button></td>
						</tr>
						<tr>
							<td>666</td>
							<td>Muhammadibrohim</td>
							<td>Ergashev</td>
							<td>Farg’ona</td>
							<td>20</td>
							<td><button>reply</button></td>
						</tr>
						<tr>
							<td className="pg-column" colSpan="6">salom</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</>
	)
}

export default Home
