<?php
 
namespace Pragmaticd\Deliveryinfopage\Controller\Deliveryinfopage;

use Magento\Framework\App\Action\Action as Action;
use Magento\Framework\App\Action\Context as Context;
use Magento\Framework\View\Result\PageFactory as PageFactory;

class Returns extends Action
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
 
