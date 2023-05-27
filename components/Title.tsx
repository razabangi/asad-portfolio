export default function Title(props: {name: string}) {
    return (
        <div className="title">
            <p>Title Component {props.name.toLowerCase()}</p>
        </div>
    );
}