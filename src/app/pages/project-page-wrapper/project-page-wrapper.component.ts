
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectDetailsComponent } from "../project-details/project-details.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-project-page-wrapper',
  imports: [ProjectDetailsComponent, NavbarComponent, FooterComponent],
  templateUrl: './project-page-wrapper.component.html',
  styleUrl: './project-page-wrapper.component.scss'
})
export class ProjectPageWrapperComponent {
  project: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const slug = this.route.snapshot.paramMap.get('slug');

    const projectsMap: Record<string, any> = {
      'abertura-conta-d0': {
        title: 'Abertura de Conta Digital D+0',
        context:
          'Participei como desenvolvedor front-end na entrega de uma nova jornada de abertura de contas digitais para uma instituição financeira de grande porte. O objetivo era otimizar a experiência do usuário e reduzir o prazo de ativação da conta de D+4 para D0, permitindo que novos clientes concluíssem todo o processo no mesmo dia, diretamente pelo app.',
        contribution:
          'Desenvolvimento das telas e fluxos em Angular 8 + TypeScript. Integração com serviços de backend, testes com Jest, uso do Design System interno e trabalho colaborativo com a equipe multidisciplinar.',
        results:
          'Redução significativa no tempo de abertura de conta (D+4 ➝ D0), aumento na conversão de clientes pelo app e contribuição direta para a estratégia de transformação digital da empresa.',
        techStack: ['Angular 8', 'TypeScript', 'Jest', 'Design System interno'],
      },
      'onboarding-modernizacao': {
        title: 'Modernização da Jornada de Onboarding',
        context:
          'Participei da modernização da jornada de onboarding de clientes, substituindo a antiga arquitetura baseada em máquinas virtuais e containers Docker por uma infraestrutura escalável e resiliente na Azure Cloud...',
        contribution:
          'Migração e refatoração da base Angular para a versão 15, com boas práticas de modularização e estrutura para micro front-ends. Integração de APIs com HttpClient, testes com Jest. Também atuei na migração de BFFs em Node.js para Java com Spring Boot, usando JUnit, OpenAPI e Maven. Realizei code reviews e mentoria técnica.',
        results:
          'Jornada mais moderna, performática e visualmente consistente. Ambientes cloud escaláveis, redução da dívida técnica e maior produtividade entre as squads.',
        techStack: [
          'Angular 15',
          'TypeScript',
          'Jest',
          'Java',
          'Spring Boot',
          'Node.js',
          'Express',
          'Maven',
          'OpenAPI',
          'Azure',
        ],
      },
      'nova-plataforma': {
        title: 'Nova Plataforma de Abertura de Contas',
        context: 'Desenvolvimento de uma nova plataforma de abertura de contas para pessoa física e jurídica em instituição financeira, com foco em escalabilidade, segurança, experiência do usuário e conformidade com normas regulatórias do BACEN e Receita Federal.',
        contribution: 'Entrega de features completas em arquitetura full-stack, do back-end em Java 17/Spring Framework ao front-end em Angular 19+/TypeScript, integrados a APIs RESTful documentadas via OpenAPI e a microsserviços orientados a eventos com Kafka. Responsável por testes automatizados (unitários e de integração), monitoramento de aplicações em produção na Azure e resolução de incidentes. Participação ativa nas cerimônias ágeis (planning, refinamento e dailies) e em code reviews constantes para garantir qualidade e padronização do código. Atuação também na orientação e onboarding de novos membros da equipe, e colaboração próxima com squads de produto e design.',
        results: 'Redução no tempo de abertura de contas e aumento na satisfação do cliente, com entrega de uma plataforma escalável e aderente às exigências regulatórias do setor financeiro.',
        techStack: ['Angular 19+', 'TypeScript', 'Jest', 'Java 17', 'Spring Framework', 'Maven', 'OpenAPI', 'Azure', 'MongoDB', 'Kafka']
      }
    };

    this.project = projectsMap[slug || ''];
  }
}
