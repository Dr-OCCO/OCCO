"use client"
import React, { useState } from 'react'
import FormSection from './_componets/FormSection'
import OutputSection from './_componets/OutputSection'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/TemplateListSection'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Link } from 'lucide-react'
import { chatSession } from '@/utils/AiModal'

interface PROPS{
    params:{
        'template-slug':string
    }
}

function CreateNewContent(props:PROPS) {

    const selectedTemplate:TEMPLATE|undefined=Templates?.find((item)=>item.slug==props.params['template-slug']);
    
    const [loading,setLoading]=useState(false);

    const [aiOutput,setAiOutput]=useState<string>('')
    const GenerateAIContent=async(formData:any)=>{
      setLoading(true);
      const SelectedPrompt=selectedTemplate?.aiPrompt;
      const FinalAIPrompt=JSON.stringify(formData)+","+SelectedPrompt;
      const result=await chatSession.sendMessage(FinalAIPrompt);
      setAiOutput(result?.response.text());
      setLoading(false);

    }
  
  
    return (
  <div className='p-10'>
    <a href={"/dashboard"}>
    <Button><ArrowLeft/>Back</Button>
    </a>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 py-5'>
      {/*form Section */}
      <FormSection selectedTemplate={selectedTemplate} userFormInput={(v:any)=>GenerateAIContent(v)} loading={loading}/>

      {/*Output Section */}
      <div className='col-span-2'>
      
      <OutputSection aiOutput={aiOutput}/>
      </div>
    </div>
    </div>
  )
}

export default CreateNewContent
