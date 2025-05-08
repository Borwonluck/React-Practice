export default function Item(props) {
    const {data, deleteStudent} = props; //ดึงข้อมูลจาก props
    return (
        <>
              <li key={data.id}>
              <p>
                {data.id} - {data.name}
              </p>
              <button onClick={() => deleteStudent(data.id)} className="delete">
                ลบ
              </button>
            </li>
        </>
    )
}