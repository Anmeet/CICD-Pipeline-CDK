import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import {
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from 'aws-cdk-lib/pipelines'
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class DemoawspipelineStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    // The code that defines your stack goes here
    const democicdpipeline = new CodePipeline(this, 'demoPipeline', {
      synth: new ShellStep('SynthStep', {
        input: CodePipelineSource.gitHub('Anmeet/CICD-Pipeline-CDK', 'main'),
        commands: ['npm ci', 'npm run build', 'npx cdk synth'],
      }),
    })
  }
}
