import Card            from "../../components/cardTecnologies/CardTecnologies";
import CardTecnologies from "../../components/cardTecnologies/CardTecnologies";

const TechnologyCard = ({technology}) => {
	return (
		<CardTecnologies className="light">
			<div className="technology__icon">
				<img src={technology.image} alt={technology.title} />
			</div>
			<div className="technology__details">
				<h6>{technology.title}</h6>
			</div>
		</CardTecnologies>
	)
}

export default TechnologyCard
