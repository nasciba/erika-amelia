import { ObraBreadcrumb, ObraBreadcrumbLink, ObraBreadcrumbSep } from "@/app/_components/styled/ObraStyles"
import { Linguagens, Obra } from "@/app/lib/sanity";

interface FullBreadcrumbsProps {
    linguagemId: string;
    linguagem: Linguagens;
    obraHref: string;
    obra: Obra;
}

export const FullBreadcrumbs = ({ linguagemId, linguagem, obraHref, obra }: FullBreadcrumbsProps) => {
    return (
        <ObraBreadcrumb aria-label="Navegação">
            <ObraBreadcrumbLink href="/obras">Obras</ObraBreadcrumbLink>
            <ObraBreadcrumbSep aria-hidden>/</ObraBreadcrumbSep>
            <ObraBreadcrumbLink href={`/obras/${linguagemId}`}>
                {linguagem.nome ?? "Linguagens"}
            </ObraBreadcrumbLink>
            <ObraBreadcrumbSep aria-hidden>/</ObraBreadcrumbSep>
            <ObraBreadcrumbLink href={obraHref}>
                {obra.nome ?? "Obra"}
            </ObraBreadcrumbLink>
        </ObraBreadcrumb>
    )
}