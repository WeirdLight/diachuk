import Title from "./Title";

export default function DescribingSections({id, title, descr, children}){
    return(
        <section id={id}>
            <Title title={title} />
            {descr}
            {children}
      </section>
    );
}