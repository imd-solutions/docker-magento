<?php
 
namespace Pragmaticd\Privacynotice\Controller\Privacynotice;

use Magento\Framework\App\Action\Action as Action;
use Magento\Framework\App\Action\Context as Context;
use Magento\Framework\View\Result\PageFactory as PageFactory;

class Notice extends Action
{
    protected $viewPage;
 
    public function __construct(Context $context, PageFactory $viewPage)
    {
        $this->viewPage = $viewPage;
         return parent::__construct($context);
    }
   
 
    public function execute()
    {
    return $this->viewPage->create();
    }
}   
 
